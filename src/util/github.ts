type GitHubAsset = {
    name: string;
    browser_download_url: string;
};

type GitHubRelease = {
    assets: GitHubAsset[];
    tag_name: string;
};

export async function fetchLatestArm64V8aApk(
    username: string,
    repository: string,
    token?: string // optional GitHub token for private repos
): Promise<string | null> {
    const baseUrl = `https://api.github.com/repos/${username}/${repository}/releases`;

    const headers: Record<string, string> = {
        "Accept": "application/vnd.github+json",
        "User-Agent": "typescript-fetch-script",
    };

    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    // First try latest (only works for published releases)
    let response = await fetch(`${baseUrl}/latest`, { headers });

    if (response.status === 404) {
        // Fall back to all releases and pick the first one (includes pre-releases)
        response = await fetch(baseUrl, { headers });
        if (!response.ok) {
            throw new Error(
                `Failed to fetch releases: ${response.status} ${response.statusText}`
            );
        }

        const releases = await response.json();
        if (!Array.isArray(releases) || releases.length === 0) {
            throw new Error(`No releases found for ${username}/${repository}.`);
        }

        // Take the most recent release (first in the array)
        const latestRelease = releases[0];

        const asset = latestRelease.assets.find(
            (a: any) => a.name.includes("arm64-v8a") && a.name.endsWith(".apk")
        );

        return asset ? asset.browser_download_url : null;
    }

    if (!response.ok) {
        throw new Error(
            `Failed to fetch latest release: ${response.status} ${response.statusText}`
        );
    }

    const release = await response.json();

    const asset = release.assets.find(
        (a: any) => a.name.includes("arm64-v8a") && a.name.endsWith(".apk")
    );

    return asset ? asset.browser_download_url : null;
}

// Example usage
(async () => {
    try {
        const apkUrl = await fetchLatestArm64V8aApk("username", "repo");
        if (apkUrl) {
            console.log("APK Download URL:", apkUrl);
        } else {
            console.log("No arm64-v8a APK found.");
        }
    } catch (err) {
        console.error(err);
    }
})();

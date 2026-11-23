# Contributing

Thanks for taking the time. Kopie is a small project, so the process is light.

## Before you start

- For a bug or a small fix, just open a pull request.
- For anything bigger, open an issue first or comment on an existing one, so we can agree on the approach before you write the code.

## Running it locally

There is no build step.

1. Fork and clone the repository.
2. Open `edge://extensions` or `chrome://extensions` and turn on Developer mode.
3. Click "Load unpacked" and pick the `extension` folder.
4. After changing a file, hit the reload button on the extension card and reopen the popup.

The code is plain HTML, CSS and JavaScript:

| File | What it does |
| --- | --- |
| `extension/manifest.json` | Extension manifest (Manifest V3) |
| `extension/popup.html`, `popup.css`, `popup.js` | The popup |
| `extension/background.js` | Right click menu |
| `extension/qrcode.js` | QR generator, vendored from [qrcodejs](https://github.com/davidshimjs/qrcodejs) with a small fix for emoji |

## Pull requests

- Keep a PR to one thing.
- If you change anything under `extension/`, bump `version` in `extension/manifest.json`. A check on the PR fails if you forget. Docs-only changes do not need a bump.
- Say in the description how you tested it. For changes to the QR code, scanning it with a phone is the test that matters.
- Avoid new permissions unless the feature really needs one. Kopie installs without a permission warning and should stay that way.
- No new dependencies or build tooling, please.

PRs are squash-merged, so do not worry about tidying your commits.

## Releases

Maintainers only. Merge the PR that bumps the version, then push a matching tag:

```
git tag v1.2
git push origin v1.2
```

The tag has to match the manifest version. Pushing it uploads the package to the Edge Add-ons store, where it goes through Microsoft's review before reaching users. A new submission fails while the previous one is still in review.

## Code of conduct

Be kind. See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

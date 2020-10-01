# Contribution

If you want to work on an existing issue, then do comment on the issue and I will assign the issue. If you seek to implement something that is not present in the issues, open a new issue and I will assign you to it.

### Installation
You can download it for Microsoft Edge(Chromium) [here](https://microsoftedge.microsoft.com/addons/detail/kopie/llmgkefkiomomhcbnakdhpcaoadebhpl).For other browsers, you will have to sideload the extension.
* Clone this repository `https://github.com/Chinmay-KB/project-kopie.git`
* Enable developer mode by going to chrome://extensions/ or its equivalent in other Chromium based browser.
* Select "Load Unpacked" and navigate to the extension folder of the cloned copy of this repository
* The icon should beside the address bar.

### Git workflow

```
## Step 1: Fork Repository

## Step 2: Git Set Up & Download
# Clone the repo
$ git clone https://github.com/<User-Name>/<Repo-Name>.git
# Add upstream remote
$ git remote add upstream https://github.com/Chinmay-KB/project-kopie.git
# Fetch and merge with upstream/master
$ git fetch upstream
$ git merge upstream/master

## Step 2: Create and Publish Working Branch
$ git checkout -b <type>/<issue|issue-number>/{<additional-fixes>}
$ git push origin <type>/<issue|issue-number>/{<additional-fixes>}

## Types:
# wip - Work in Progress; long term work; mainstream changes;
# feat - New Feature; future planned; non-mainstream changes;
# bug - Bug Fixes
# exp - Experimental; random experiemntal features;
```
### On Task Completion

```
## Committing and pushing your work
# Ensure branch
$ git branch
# Fetch and merge with upstream/master
$ git fetch upstream
$ git merge upstream/master
# Add untracked files
$ git add .
# Commit all changes with appropriate commit message and description
$ git commit -m "your-commit-message" -m "your-commit-description"
# Fetch and merge with upstream/master again
$ git fetch upstream
$ git merge upstream/master
# Push changes to your forked repository
$ git push origin <type>/<issue|issue-number>/{<additional-fixes>}

## Creating the PR using GitHub Website
# Create Pull Request from <type>/<issue|issue-number>/{<additional-fixes>} branch in your forked repository to the master branch in the upstream repository
# After creating PR, add a Reviewer (Any Admin) and yourself as the assignee
# Link Pull Request to appropriate Issue, or Project+Milestone (if no issue created)
# IMPORTANT: Do Not Merge the PR unless specifically asked to by an admin.
```
### After Pull Request is Merged
```
# Delete branch from forked repo
$ git branch -d <type>/<issue|issue-number>/{<additional-fixes>}
$ git push --delete origin <type>/<issue|issue-number>/{<additional-fixes>}
# Fetch and merge with upstream/master
$ git checkout master
$ git pull upstream
$ git push origin
```
### Note
- Always follow [commit message standards](https://chris.beams.io/posts/git-commit/)
- About the [fork-and-branch workflow](https://blog.scottlowe.org/2015/01/27/using-fork-branch-git-workflow/)



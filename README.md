# 2022-fall-byte-create-website-together

Learn how to work together as developers _in any kind of programming language_. We'll be doing this by building a website, together.

By the end of this Byte, you'll know how to:

- [ ] Use git
- [ ] Use Github
- [ ] Make a pull request
- [ ] Work with pull requests

> If you have any questions during the workshop, don't be afraid to interrupt.

## Getting Started

A repository's `README.md` usually contains steps to get started with the repository code.

### 1. You'll Need to Install Git

There are a bunch of ways to install git, and a lot of them are valid. I'll start y'all with the easiest way for y'alls platform.

#### Windows

With the Start Menu, search for _Powershell_ and open that.
Run this command:

```powershell
winget install Git.Git
```

If that doesn't work, then you'll need to [go to their website, download, and run their installer](https://git-scm.com/download/win).

#### MacOS

Try this command:

```bash
xcode-select --install
```

If that doesn't work, we'll have to use [Homebrew](https://brew.sh/).
We can install that with this command:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### Linux

It either comes preinstalled, or you may have to use your system's package manager.
For Ubuntu, this is the command:

```bash
sudo apt install git
```

---

### 2. Setting Up Local Development Environment

#### Checking Installation and Final Configuration

To test your installation, restart your terminal run `git`. There should be some output.

After you've installed git, you need to identify yourself.

```bash
git config --global user.name "YOUR USERNAME HERE"
git config --global user.email "YOUR PREFERRED EMAIL HERE"
```

#### Downloading the Repository

```bash
git clone <REPOSITORY URL>
```

---

### Using Git Locally

To see the _status_ or state of your git repository:

```bash
git status
```

#### Branches

Branches split away from the current version of the log and work with another version separately. It's still based off the original.

##### Making a New Branch

```bash
git checkout -b NAME-OF-YOUR-BRANCH
```

> Note how there's no spaces and we use `-` (dashes) instead.

> The `-b` part says we're making a new branch

##### Switching Between Branches

```bash
git checkout NAME-OF-BRANCH
```

You might not remember the branches you have right now, so use this to see your current branches

```bash
git branch
```

#### Tracking Changes

```bash
git add <file1> <file2> <file3> <...>

or

git add .
```

> The `.` refers to the current directory in UNIX

To _commit_ changes to the _log_.

```bash
git commit -m "YOUR CHANGES IN THE CODEBASE"
```

To see your commit or the actual log of changes

```bash
git log
```

> You can exit `git log` by press the letter or key (on your keyboard) `q`

### 3. Using Github

[First, make sure you have an account.](https://github.com/signup)

Then go to your profile and share us your name on Discord :D

I'll be adding y'all as collaborators. You'll have to do this with your teammates for y'alls own team projects.

### 4. Sharing Your Changes

On the branch you have changes, you want to use this (make sure you've commited your changes).

If you haven't pushed your branch yet, you have to run this

```bash
git push -u origin NAME-OF-YOUR-BRANCH
```

If you already have pushed your branch just do this:

```bash
git push
```

### 5. Receiving Others Branches and Changes

```bash
git pull
```

> In general, if you need to update your project with other people changes, run this

## Technology Used for Website

This will be deployed with [Vercel](https://vercel.com/) and is using the [Eleventy](https://www.11ty.dev/) SSG.

## Running the Website

```bash
npm start
```

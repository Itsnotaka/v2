import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import Container from '../components/Container';

const Setups: NextPage = () => {
	const [mounted, setMounted] = useState(false);
	const [computerName, setComputerName] = useState('newName');
	const RaycastRef = useRef<HTMLAnchorElement>(null);

	const executeScroll = () => RaycastRef.current?.scrollIntoView();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<>
			<Head>
				<title>Setups — Daniel Fu</title>
			</Head>
			<Container>
				<article className="prose-hr:border-[#343434] prose-p:whitespace-wrap prose pb-16 prose-h1:text-center prose-h1:font-mono prose-h1:text-2xl prose-h1:font-bold prose-p:mt-3 prose-p:text-base prose-p:font-bold prose-hr:mt-3 prose-hr:h-1 prose-hr:w-full prose-hr:border-dotted dark:text-primary-250 prose-h1:dark:text-primary-250 prose-a:dark:text-primary-250 prose-code:dark:text-primary-250">
					<h1>My setup for web development</h1>
					<p>
						When I decided to get into development, I realized I need a place to
						organize and store all my important setups for my small brain to
						setup an identical dev environment every time.
					</p>
					<hr />
					<h1>System Preference</h1>
					<p>Dock</p>
					<ul>
						<li>Remove most applications from dock.</li>
						<li>Automatic Hide.</li>
						<li>Smaller dock.</li>
						<li>"Dock Position": Bottom.</li>
						<li>"Show recent applications in Dock" off.</li>
						<li>"Show indicators for open applications" on.</li>
						<li>Battery &rarr; "Show Percentage".</li>
					</ul>
					<p>TrackPad</p>
					<ul>
						<li>Secondary Click.</li>
						<li>Speed: 6/10.</li>
					</ul>
					<p>Accessability</p>
					<ul>
						<li>Scroll speed: 5/8.</li>
					</ul>
					<p>Keyboard</p>
					<ul>
						<li>disable "Capitalize word automatically".</li>
						<li>disable "Add full stop with double-space".</li>
						<li>disable "Use smart quotes and dashes".</li>
						<li>use " for double quotes.</li>
						<li>use ' for single quotes.</li>
					</ul>
					<p>Spotlight</p>
					<ul>
						<li>
							disable since I use{' '}
							<span
								onClick={executeScroll}
								className="cursor-pointer font-bold underline underline-offset-1"
							>
								Raycast
							</span>
							.
						</li>
					</ul>
					<p>Mission Control</p>
					<ul>
						<li>disable Hot corners.</li>
					</ul>
					<p>Finder</p>
					<ul>
						<li>Hide all tags.</li>
						<li>Show all file name extensions.</li>
						<li>Remove item from bin after 30 days.</li>
						<li>View &rarr; show preview.</li>
					</ul>
					<p>Sharing</p>
					<ul>
						<li>"Change computer name".</li>
					</ul>
					<p>For terminal (Make sure all file sharing is disabled)</p>
					<input
						placeholder="computer name"
						className="cursor-text rounded-[4px] border border-primary-250 p-2 font-mono text-sm font-medium shadow-md"
						onChange={e =>
							// check if it is empty
							e.target.value.length > 0 && setComputerName(e.target.value)
						}
					/>
					<pre>
						<code>sudo scutil --set ComputerName {computerName}</code>
					</pre>
					<pre>
						<code>sudo scutil --set LocalHostName {computerName}</code>
					</pre>
					<pre>
						<code>sudo scutil --set HostName {computerName}</code>
					</pre>
					<p>Security and privacy</p>
					<ul>
						<li>Turn on FileVault</li>
					</ul>
					<p>Storage</p>
					<ul>
						<li>Remove Garage Band & Sound Library.</li>
						<li>Remove iMovie.</li>
					</ul>
					<hr />
					<h1>System Preference (Misc)</h1>
					<p>Terminal</p>
					<span>
						Do not open previous previewed files (e.g. PDFs) when opening a new
						one
					</span>
					<pre>
						<code>
							defaults write com.apple.Preview ApplePersistenceIgnoreState YES
						</code>
					</pre>
					<span>Show Library folder </span>
					<pre>
						<code>chflags nohidden ~/Library </code>
					</pre>
					<span>Show hidden files </span>
					<pre>
						<code>defaults write com.apple.finder AppleShowAllFiles YES</code>
					</pre>
					<span>Show path bar</span>
					<pre>
						<code>defaults write com.apple.finder ShowPathbar -bool true</code>
					</pre>
					<span></span>Show status bar
					<pre>
						<code>
							defaults write com.apple.finder ShowStatusBar -bool true{'\n\n'}
							#Refresh Finder {'\n\n'}
							killall Finder
						</code>
					</pre>
					<hr />
					<h1>Setups and Applications</h1>
					<p>Homebrew</p>
					Install{' '}
					<a href="https://brew.sh/" target="_blank" rel="noreferrer">
						Homebrew
					</a>{' '}
					as package manager for macOS:
					<p>If using M1 Macbooks, install rosetta 2 first:</p>
					<pre>
						<code>
							/usr/sbin/softwareupdate --install-rosetta --agree-to-license
						</code>
					</pre>
					<span>Install Homebrew for M1 Chip</span>
					<pre>
						<code>
							/bin/bash -c "$(curl -fsSL
							https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
						</code>
					</pre>
					<span>Update Homebrew</span>
					<pre>
						<code>brew update</code>
					</pre>
					<span>use Homebrew to install a GUI applications</span>
					<pre>
						<code>
							brew install --cask \ bitwarden \ google-chrome \
							visual-studio-code \ docker \ discord \ vlc \ hyper \ spotify \
							fig
						</code>
					</pre>
					<span>use Homebrew to install a Terminal applications</span>
					<pre>
						<code>brew install \ nvm \ git</code>
					</pre>
					<span>Install Oh My Zsh for terminal</span>
					<pre>
						<code>
							sh -c "$(curl -fsSL
							https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
						</code>
					</pre>
					<span>Update Oh My Zsh</span>
					<pre>
						<code>omz update</code>
					</pre>
					<span>Install Editor Fonts</span>
					<ul>
						<li>
							<a
								href="https://fonts.google.com/specimen/Inter#about"
								target="_blank"
								rel="noreferrer"
							>
								Inter (Free)
							</a>
						</li>
						<li>
							<a
								href="https://www.monolisa.dev/"
								target="_blank"
								rel="noreferrer"
							>
								MonoLisa (Premium)
							</a>
						</li>
					</ul>
					<hr />
					<h1>NVM for Node/NPM</h1>
					<span>
						The{' '}
						<a
							href="https://github.com/nvm-sh/nvm"
							target="_blank"
							rel="noreferrer"
						>
							node version manager (NVM)
						</a>{' '}
						is used to install and manage multiple Node versions. After
						installing via Homebrew in a previous step, type the following
						commands to complete the installation:
					</span>
					<pre>
						<code>
							echo "source $(brew --prefix nvm)/nvm.sh" {'>>'} ~/.zshrc source{' '}
							{'\n\n'}
							~/.zshrc
						</code>
					</pre>
					<span>install the latest LTS version of Node (Google it)</span>
					<pre>
						<code>
							nvm install {'<latest LTS version from https://nodejs.org/en/>'}
						</code>
					</pre>
					<span>
						Install yarn but before that -{' '}
						<span>
							<a
								href="https://github.com/sindresorhus/guides/blob/main/npm-global-without-sudo.md"
								target="_blank"
								rel="noreferrer"
							>
								check out how to use <code>npm install -g</code> without sudo
							</a>
						</span>
					</span>
					<pre>
						<code>npm install -g yarn</code>
					</pre>
					<hr />
					<h1>Productivity Tools</h1>
					<span>Tools that I use on a daily basis.</span>
					<ul>
						<li>
							<a
								href="https://www.raycast.com/"
								target="_blank"
								rel="noreferrer"
								ref={RaycastRef}
							>
								Raycast (Better Spotlight)
							</a>
						</li>
						<li>
							<a
								href="https://flexibits.com/fantastical"
								target="_blank"
								rel="noreferrer"
							>
								Fantastical (better calendar)
							</a>
						</li>
						<li>
							<a
								href="https://sparkmailapp.com/"
								target="_blank"
								rel="noreferrer"
							>
								Spark (Better email client)
							</a>
						</li>
						<li>
							<a
								href="https://v2.airbuddy.app/"
								target="_blank"
								rel="noreferrer"
							>
								Air Buddy (Better Airpod control)
							</a>
						</li>
						<li>
							<a
								href="https://apps.apple.com/us/app/magnet/id441258766"
								target="_blank"
								rel="noreferrer"
							>
								Magnet (Window Snapping)
							</a>
						</li>
						<li>
							<a href="https://www.notion.so/" target="_blank" rel="noreferrer">
								Notion
							</a>
						</li>
						<li>
							<a
								href="https://apps.apple.com/us/app/the-unarchiver/id425424353"
								target="_blank"
								rel="noreferrer"
							>
								Unachiver (Zip client)
							</a>
						</li>
						<li>
							<a
								href="https://apps.apple.com/app/id430798174"
								target="_blank"
								rel="noreferrer"
							>
								Hazeover (Screen focus dimmer)
							</a>
						</li>
					</ul>
				</article>
			</Container>
		</>
	);
};

export default Setups;

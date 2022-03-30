import React, { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<main className="relative my-0 mx-auto box-border flex min-h-screen w-auto max-w-3xl flex-col p-16">
			{children}
		</main>
	);
}

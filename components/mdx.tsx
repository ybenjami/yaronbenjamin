import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { highlight } from 'sugar-high';
import { Architecture } from './architecture';
import { Decision, Decisions, Stat, Stats } from './case-study';
import { Placeholder } from './ui';

function CustomLink({ href: rawHref, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const href = rawHref ?? '';
  if (href.startsWith('/')) return <Link href={href} {...rest} />;
  if (href.startsWith('#')) return <a href={href} {...rest} />;
  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- next/image requires width+height but MDX doesn't supply them
function RoundedImage(props: any) {
  return <Image className="rounded-2xl" {...props} alt={props.alt ?? ''} />;
}

function Code({ children, ...props }: { children: string }) {
  return <code dangerouslySetInnerHTML={{ __html: highlight(children) }} {...props} />;
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

function heading(level: number) {
  const H = ({ children }: { children: React.ReactNode }) =>
    React.createElement(`h${level}`, { id: slugify(String(children)) }, children);
  H.displayName = `H${level}`;
  return H;
}

const components = {
  h2: heading(2),
  h3: heading(3),
  a: CustomLink,
  code: Code,
  Image: RoundedImage,
  Architecture,
  Decisions,
  Decision,
  Stats,
  Stat,
  Placeholder,
};

export function CustomMDX({ source }: { source: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- custom components don't match MDXRemote's strict component type signature
  return <MDXRemote source={source} components={components as any} />;
}

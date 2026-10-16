import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import { Architecture } from './architecture'
import { Decision, Decisions, Stat, Stats } from './case-study'
import { Placeholder } from './ui'

function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const href = props.href ?? ''
  if (href.startsWith('/')) return <Link {...(props as any)} href={href} />
  if (href.startsWith('#')) return <a {...props} />
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props: any) {
  return <Image className="rounded-2xl" {...props} alt={props.alt ?? ''} />
}

function Code({ children, ...props }: { children: string }) {
  return <code dangerouslySetInnerHTML={{ __html: highlight(children) }} {...props} />
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
}

function heading(level: number) {
  const H = ({ children }: { children: React.ReactNode }) =>
    React.createElement(`h${level}`, { id: slugify(String(children)) }, children)
  H.displayName = `H${level}`
  return H
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
}

export function CustomMDX({ source }: { source: string }) {
  return <MDXRemote source={source} components={components as any} />
}

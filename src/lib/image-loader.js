export default function imageLoader({ src }) {
  // This loader automatically prepends the basePath for GitHub Pages
  // without requiring manual prefixing in component code.
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  
  if (src.startsWith('http')) return src
  
  // Ensure we don't double-slash if basePath ends with / and src starts with /
  const normalizedBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`
  
  return `${normalizedBasePath}${normalizedSrc}`
}

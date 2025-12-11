# Image Optimization Guide for SalvTec Website

## ✅ Completed Optimizations

### 1. Next.js Image Component
All images have been converted to use Next.js `Image` component which provides:
- Automatic WebP/AVIF conversion
- Responsive image sizes
- Lazy loading by default
- Blur placeholder support
- Prevents Cumulative Layout Shift (CLS)

### 2. Priority Loading
- Logo in header: `priority={true}` for immediate loading
- Other images: Lazy-loaded automatically

### 3. Proper Dimensions
All images now have explicit width/height to prevent layout shift.

---

## 🎯 Additional Optimizations You Should Do

### 1. Convert Images to Modern Formats
Your images are currently PNG/JPG/JPEG. Convert them to WebP for better compression:

**Using PowerShell:**
```powershell
# Install sharp-cli globally
npm install -g sharp-cli

# Convert all images to WebP (run from public/images/)
Get-ChildItem -Filter *.png | ForEach-Object { sharp -i $_.Name -o ($_.BaseName + '.webp') -f webp -q 85 }
Get-ChildItem -Filter *.jpg | ForEach-Object { sharp -i $_.Name -o ($_.BaseName + '.webp') -f webp -q 85 }
Get-ChildItem -Filter *.jpeg | ForEach-Object { sharp -i $_.Name -o ($_.BaseName + '.webp') -f webp -q 85 }
```

**Benefits:** 25-35% smaller file sizes with same quality

### 2. Optimize Image Sizes
Many images are likely too large. Recommended sizes:
- Logo: 240x128px max
- Brand logos (Hitachi/Gree): 560x320px max
- Review screenshots: 560x320px max
- WhatsApp icon: 40x40px max
- Hero background: 1920x1080px max

**Using sharp-cli:**
```powershell
sharp -i logo-salvtec.png -o logo-salvtec-optimized.png --resize 240 128
```

### 3. Optimize Hero Background Image
The hero2.png is loaded as CSS background. Consider:

**Option A: Reduce file size**
```powershell
sharp -i hero2.png -o hero2-optimized.webp -f webp -q 80 --resize 1920
```

**Option B: Use Next.js Image as background**
```tsx
// In hero.tsx
<div className="relative h-[30rem]">
  <Image
    src="/images/hero2.webp"
    alt="Background"
    fill
    priority
    quality={85}
    className="object-cover"
  />
  <div className="absolute inset-0 bg-black/50 z-10" />
  {/* Content here with z-20 */}
</div>
```

### 4. Add Blur Placeholders
Update Image components with placeholder:
```tsx
<Image
  src="/images/logo-salvtec.png"
  width={120}
  height={64}
  placeholder="blur"
  blurDataURL="data:image/png;base64,iVBORw0..." // Generate with sharp
  alt="SalvTec"
/>
```

### 5. Enable Remote Image Optimization
If you add external images later, configure in `next.config.ts`:
```typescript
images: {
  formats: ['image/avif', 'image/webp'],
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'example.com',
    },
  ],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  imageSizes: [16, 32, 48, 64, 96, 128, 256],
},
```

### 6. Compress Existing Images (Quick Win)
Use online tools or CLI:
- **TinyPNG/TinyJPG**: https://tinypng.com (drag & drop)
- **Squoosh**: https://squoosh.app (Google's tool)
- **ImageOptim** (Mac) or **FileOptimizer** (Windows)

### 7. Add Loading States
```tsx
<Image
  src="/images/review1.png"
  width={280}
  height={160}
  loading="lazy"
  quality={85}
  alt="Review"
/>
```

### 8. Implement CDN
Deploy to Vercel (automatic image CDN) or use Cloudflare Images for additional optimization.

---

## 📊 Performance Checklist

- [x] Next.js Image component implemented
- [x] Proper width/height attributes
- [x] Priority loading for above-fold images
- [x] Lazy loading for below-fold images
- [ ] Convert images to WebP format
- [ ] Resize images to appropriate dimensions
- [ ] Compress images (aim for <100KB each)
- [ ] Add blur placeholders
- [ ] Optimize hero background image
- [ ] Test on Google PageSpeed Insights

---

## 🚀 Expected Performance Gains

After implementing all optimizations:
- **Load time:** 40-60% faster
- **Page size:** 50-70% smaller
- **Lighthouse score:** 90+ performance
- **LCP (Largest Contentful Paint):** <2.5s
- **CLS (Cumulative Layout Shift):** 0

---

## 📝 Quick Commands

**Test current image sizes:**
```powershell
Get-ChildItem -Path public/images -File | Select-Object Name, @{Name="Size(KB)";Expression={[math]::Round($_.Length/1KB,2)}} | Format-Table -AutoSize
```

**Install optimization tools:**
```powershell
npm install -D sharp
```

**Build and test:**
```powershell
npm run build
npm start
```

Then test at: https://pagespeed.web.dev/

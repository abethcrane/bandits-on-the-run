# Bandits on the Run - Jekyll Site

This is the official website for **Bandits on the Run**, an indie-folk-pop-americana band from Brooklyn, NY. The site is built with Jekyll and features multiple sections including shows, music, theater, videos, and contact information.

## Prerequisites

Before running this site, you'll need:

- **Ruby** (version 2.6 or higher)
- **RubyGems**
- **Bundler** (`gem install bundler`)

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bandits-jekyll/botr
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Run the development server**
   ```bash
   bundle exec jekyll serve
   ```

4. **View the site**
   Open your browser and navigate to `http://localhost:4000`

## Development

### File Structure

```
botr/
├── _config.yml          # Site configuration
├── _layouts/            # Page templates
├── _includes/           # Reusable components
├── _posts/              # Blog posts (if any)
├── assets/              # CSS, JS, and images
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript files
│   └── images/         # Image assets
├── index.md            # Homepage
├── shows.md            # Shows page
├── music.md            # Music page
├── theater.md          # Theater page
├── videos.md           # Videos page
└── contact.md          # Contact page
```

### Key Features

- **Responsive Design**: Built with modern CSS and responsive layouts
- **Dynamic Shows**: JavaScript-powered shows listing with real-time updates
- **Social Media Integration**: Links to all major social platforms
- **Multiple Sections**: Dedicated pages for different aspects of the band

### Making Changes

1. **Content Updates**: Edit the `.md` files in the root directory
2. **Styling**: Modify files in `assets/css/`
3. **Layout Changes**: Update templates in `_layouts/`
4. **Configuration**: Edit `_config.yml` for site-wide settings

### Build for Production

```bash
bundle exec jekyll build
```

This creates a `_site` directory with the static files ready for deployment.

## Deployment

The site can be deployed to:
- **GitHub Pages** (recommended)
- **Netlify**
- **Vercel**
- Any static hosting service

### GitHub Pages Deployment

1. Push your changes to the main branch
2. Enable GitHub Pages in your repository settings
3. Select the `main` branch as source
4. Your site will be available at `https://username.github.io/repository-name`

## Dependencies

- **Jekyll** (~> 4.4.1)
- **Minima Theme** (~> 2.5)
- **Jekyll Feed** (~> 0.12)

## Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   bundle exec jekyll serve --port 4001
   ```

2. **Dependencies not found**
   ```bash
   bundle update
   ```

3. **Build errors**
   ```bash
   bundle exec jekyll doctor
   ```

### Getting Help

- Check the [Jekyll documentation](https://jekyllrb.com/docs/)
- Review the [Minima theme documentation](https://github.com/jekyll/minima)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `bundle exec jekyll serve`
5. Submit a pull request

## License

This project is proprietary to Bandits on the Run.

---

**Bandits on the Run** - Making music-magic happen everywhere from subway platforms to concert halls.

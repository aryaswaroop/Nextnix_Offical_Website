import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, url }) {
    const siteName = "Nextnix - Learn tech, Build real Skills";
    const fullTitle = title ? `${title} | ${siteName}` : siteName;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={url} />

            {/* Social Media & YouTube Share Tags (Open Graph) */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
        </Helmet>
    );
}

export default function FrontendWrapperUtils(props) {
  const { currentPageName, match, settings } = props;
  window.scrollTo({ top: 0 });
  if (settings?.gtag)
    window.gtag('config', settings.gtag, {
      page_title: currentPageName,
      page_path: match.path,
    });
}

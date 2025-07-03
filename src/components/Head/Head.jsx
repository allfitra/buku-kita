import { Helmet } from "react-helmet-async";

export const Head = ({ title, description }) => {
  const pageTitle = title ? `Buku Kita | ${title}` : "Buku Kita";

  return (
    <Helmet>
      <title>{pageTitle}</title>

      {description && <meta name="description" content={description} />}
    </Helmet>
  );
};

import PhotoDetails from "@/components/PhotoDetails";

function PhotoDetailsPage({ params: { id, lang } }) {
  return <PhotoDetails id={id} lang={lang} />;
}

export default PhotoDetailsPage;

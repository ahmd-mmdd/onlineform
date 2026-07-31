import VideoForm from "./forms/VideoForm";
import PhotoForm from "./forms/PhotoForm";
import DesignForm from "./forms/DesignForm";
import SocialForm from "./forms/SocialForm";
import OtherForm from "./forms/OtherForm";

type Props = {
  service: string;
};

export default function OrderForm({ service }: Props) {
  switch (service) {
    case "video":
      return <VideoForm />;

    case "photo":
      return <PhotoForm />;

    case "design":
      return <DesignForm />;

    case "social":
      return <SocialForm />;

    default:
      return <OtherForm />;
  }
}
import { HomeView } from "../../../viewModels/Home/Home.view";
import { useHomeViewModel } from "../../../viewModels/Home/useHome.viewMode";

export default function Home() {
  const viewModel = useHomeViewModel();
  return <HomeView {...viewModel} />;
}

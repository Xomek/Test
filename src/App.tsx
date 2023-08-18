import { AutocompleteControl } from "./components";

const App: React.FC = () => {
  return (
    <div>
      <AutocompleteControl value="" onChange={() => {}} max={3} />
      <AutocompleteControl value="" onChange={() => {}} max={10} />
    </div>
  );
};

export default App;

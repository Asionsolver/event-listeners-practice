import { DynamicGrid } from "./components/on-click/DynamicGrid"
import { OnClickHard } from "./components/on-click/OnClickHard"
import { OnClickMedium } from "./components/on-click/OnClickMedium"
import { OnClickSimple } from "./components/on-click/OnClickSimple"
import { ThemeSwitch } from "./components/on-click/ThemeSwitch"
import { OnMouseEnterHard } from "./components/on-mouse-enter/OnMouseEnterHard"
import { OnMouseEnterMedium } from "./components/on-mouse-enter/OnMouseEnterMedium"
import { OnMouseEnterSimple } from './components/on-mouse-enter/onMouseEnterSimple';


function App() {
  return (
    <>
      <h1 className="text-amber-500 font-bold text-center text-3xl mt-3"> Top 20 event listeners commonly used in React applications</h1>

      <div className="flex gap-2">
        <OnClickSimple />
        <OnClickMedium />
        <OnClickHard />
        <ThemeSwitch />
      </div>
      <DynamicGrid />
      <div className="flex gap-2">
        <OnMouseEnterSimple />
        <OnMouseEnterMedium />
        <OnMouseEnterHard/>
      </div>
    </>
  )
}

export default App

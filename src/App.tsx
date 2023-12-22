import About from "./About"
import ConfigUser from "./ConfigUser"
import UserInfo from "./UserInfo"
import { useMultiStepForm } from "./useMultiStepFrom"
import './App.css'

const SideBarLinks = [
  { id: 1, name: "User Info" },
  { id: 2, name: "About User Info" },
  { id: 3, name: "Config USer Info" },
]
function App() {

  const {
    steps,
    currentStepIndex,
    step,
    back,
    next,
    isLastStep,
    isFirstStep
  } = useMultiStepForm([<UserInfo />, <About />, <ConfigUser />])

  const ActiveLink = currentStepIndex + 1;
  return (
    <>
      <div className="container borderRaduis">
        <div className="flex">
          <div className="flex1 borderRaduis">
            <h3>Menu</h3>
            <ul className="list">
              {SideBarLinks.map(link => (
                <li key={link.id} className={`${ActiveLink === link.id ? 'active' : ''} borderRaduis`}>
                  <span>{link.id}</span>
                  <span>{link.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex3 borderRaduis">
            <form action="" method="post">
              <div>
                {currentStepIndex + 1} / {steps.length}
              </div>

              {step}

              <div className="flex buttons">
                {!isFirstStep && <button className="back" type="button" onClick={back}>Back</button>}

                <button type="button" onClick={next} className="next">
                  {isLastStep ? "Finish step" : "Next Step"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

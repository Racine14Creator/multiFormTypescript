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
      <div className="container">
        <div className="flex">
          <div className="flex1">
            <h3>Menu</h3>
            <ul>
              {SideBarLinks.map(link => (

                <li key={link.id} className={ActiveLink === link.id ? 'active' : ''}>{link.name}</li>
              ))}
            </ul>
          </div>

          <div className="flex3">
            <form action="" method="post">
              <div>
                {currentStepIndex + 1} / {steps.length}
              </div>

              {step}

              <div>
                {!isFirstStep && <button type="button" onClick={back}>Back</button>}

                <button type="button" onClick={next}>
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

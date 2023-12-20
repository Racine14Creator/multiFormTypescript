import { FormWrapper } from "./FormWrapper"

const UserInfo = () => {
    return (
        <FormWrapper title={`User info`}>
            <div className="group">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username..." className="input"
                />
            </div>
            <div className="group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="e. g: email@example.com..." className="input"
                />
            </div>
        </FormWrapper>
    )
}

export default UserInfo
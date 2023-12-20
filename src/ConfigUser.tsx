import { FormWrapper } from "./FormWrapper"

const ConfigUser = () => {
    return (
        <>
            <FormWrapper title={`Config Info`}>
                <div className="group">
                    <label htmlFor="userLevel">User Level</label>
                    <select name="userlevel" id="userLevel" className="input">
                        <option value="">-- Select --</option>
                        <option value="1">Admin</option>
                        <option value="0">User</option>
                    </select>
                </div>
            </FormWrapper>
        </>
    )
}

export default ConfigUser
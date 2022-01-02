import './newUser.css'

export default function NewUser() {
    return (
        <div className='new-user'>
            <h1 className="new-user-title">New User</h1>
            <form action="" className="new-user-form">
                <div className="new-user-item">
                    <label>Username</label>
                    <input type="text" placeholder='john' />
                </div>
                <div className="new-user-item">
                    <label>Full Name</label>
                    <input type="text" placeholder='john Smith' />
                </div>
                <div className="new-user-item">
                    <label>DOB</label>
                    <input type="cal" placeholder='12-jun-93' />
                </div>
                <div className="new-user-item">
                    <label>Email</label>
                    <input type="email" placeholder='john123@gmail.com' />
                </div>
                <div className="new-user-item">
                    <label>Passward</label>
                    <input type="passward" placeholder='*******' />
                </div>
                <div className="new-user-item">
                    <label>Phone</label>
                    <input type="number" placeholder='+91 9623 521 447' />
                </div>
                <div className="new-user-item">
                    <label>Address</label>
                    <input type="text" placeholder='Banglore | India' />
                </div>
                <div className="new-user-item">
                    <label>Gender</label>
                    <div className="new-user-gender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label for="other">Others</label>
                    </div>
                </div>
                <div className="new-user-item">
                    <label>Active</label>
                    <select name="active" id="active" className="new-user-select">
                        <option value="yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <button className="new-user-btn">Create</button>
            </form>
        </div>
    )
}

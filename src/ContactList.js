import React from 'react'
import { BACKEND_URL } from './app_config'

const ContactList = ({contacts, updateContact, updateCallback}) => {

    const deleteContact = async (id) => {
        const url = BACKEND_URL + `/delete_contact/${id}`

        try {
            const response = await fetch(url, {method: "DELETE"})

            if (response.status === 200) {
                // Successful
                updateCallback()
            }
            else {
                // Failure
                const response_data = await response.json()
                alert(response_data.message)
            }
        }
        catch (error) {
            alert(error)
        }

    }

    return <div>
        <h1>
            CRUD application which communicates with a backend hosted with PythonAnywhere
        </h1>
        <p>
            This simple web app is just here so we can test if the communication between the React Frontend and the Python Backend is working just fine.
        </p>
        <p>
            We can use this to check if our Backend is properly connected to the PythonAnywhere's MySQL database.
        </p>
        <h2>Registered Users</h2>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact) => (
                    <tr key={contact.id}>
                        <td>{contact.firstName}</td>
                        <td>{contact.lastName}</td>
                        <td>{contact.email}</td>
                        <td>
                            <button onClick={() => updateContact(contact)}>Update</button>
                            <button onClick={() => deleteContact(contact.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default ContactList
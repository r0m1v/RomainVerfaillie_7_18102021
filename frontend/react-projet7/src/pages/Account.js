import React from 'react';

const Account = () => {
    return (
        <div className="account">
            <form>
                <input type="texte" placeholder="Pseudo"></input>
                <textarea placeholder="Message"></textarea>
                <input type="submit" value="Publier"></input>
            </form>
        </div>
    );
};

export default Account;
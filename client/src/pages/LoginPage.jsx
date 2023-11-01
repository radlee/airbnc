export default function LoginPage() {
    return(
        <div className="mt-4">
            <h1 className="text-4xl text-center">Logina</h1>
            <form className="max-w-md mx-auto">
                <input type="email" name="" placeholder="yourname@mail.com" />
                <input type="password" name="" placeholder="password" />
                <button className="primary">Logina</button>
            </form>
        </div>
    )
}
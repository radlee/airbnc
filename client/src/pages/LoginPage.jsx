export default function LoginPage() {
    return(
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-32">
                <h1 className="text-4xl text-center mb-4">Logina</h1>
                <form className="max-w-md mx-auto">
                    <input type="email" name="" placeholder="yourname@mail.com" />
                    <input type="password" name="" placeholder="password" />
                    <button className="primary">Logina</button>
                </form>
            </div>
        </div>
    )
}
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary py-3">
            <div class="container">
                <a class="navbar-brand" href="#">TSezari Kvelashvili</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home Page</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">YouTube / TikTok</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Web Development</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
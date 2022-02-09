import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ButtonLogIn, ButtonLogOutLanding } from "../../private/ButtonLogIn";
import { useAuth0 } from "@auth0/auth0-react";
import { getUsers, postEmail } from "../../redux/actions/indexL";
import { useDispatch, useSelector } from "react-redux";
import ButtonSignIn from "../../private/ButtonSignIn";
import { ButtonsHomeE, ButtonsHomeP } from "../../private/ButtonsHome";

const Landing = () => {
  const dispatch = useDispatch();
  const profileState = useSelector(
    (state) => state.rootReducerLanding.perfiles
  );
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    dispatch(getUsers(profileState.mail));
  });

  const [input, setInput] = useState({
    name: "",
    email: "",
    photo: "",
    profile: "",
  });

  function handleRecruiter(e) {
    e.preventDefault();
    dispatch(postEmail(input));
    console.log(input);
    setInput({
      name: user.name,
      email: user.email,
      photo: user.picture,
      profile: "BUSINESS",
    });
  }

  function handleDeveloper(e) {
    e.preventDefault();
    dispatch(postEmail(input));
    console.log(input);
    setInput({
      name: user.name,
      email: user.email,
      photo: user.picture,
      profile: "DEVELOPER",
    });
  }

  return (
    <body className="p-9 bg-gray-300">
      <nav className=" grid grid-cols-2">
        <Link to="/">
          <h3 className="font-bold  text-2xl">JSeekers</h3>
        </Link>
        <div>
          <div className="float-right">
            <div className="float-right">
              {!isAuthenticated ? <ButtonLogIn /> : <ButtonLogOutLanding />}
            </div>
            <a
              href="#about"
              className="hover:opacity-100 opacity-70 text-lg mr-4"
            >
              About
            </a>
            <a
              href="#about"
              className="hover:opacity-100 mr-4 opacity-70 text-lg"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
      <selection className="px-16 mt-32 mb-32">
        {isAuthenticated ? (
          profileState.profile === null ? (
            //NUEVO USUARIO
            <div className="grid grid-cols-2">
              <div className="p-2">
                <h2 className="text-5xl  font-bold pb-4">Developer?</h2>
                <p className="pb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora, sapiente vero temporibus ullam voluptatibus modi
                  maxime quis minima dicta iure hic, molestiae libero veritatis
                  quos.
                </p>
                <Link to="/homep/create">
                  {" "}
                  <button
                    className="p-4 ml-2 py-2 inline-block bg-gradient-to-r to-verdeClaro from-verdeMedio text-white font-bold rounded-3xl filter hover:drop-shadow"
                    onClick={(e) => handleDeveloper(e)}
                  >
                    Empresa...
                  </button>
                </Link>
              </div>
              <div className="p-2">
                <h2 className="text-5xl font-bold pb-4">Recruiter?</h2>
                <p className="pb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora, sapiente vero temporibus ullam voluptatibus modi
                  maxime quis minima dicta iure hic, molestiae libero veritatis
                  quos.
                </p>
                <Link to="/homee/create">
                  <button
                    className="p-4 ml-2 py-2 inline-block bg-gradient-to-r to-verdeClaro from-verdeMedio text-white font-bold rounded-3xl filter hover:drop-shadow"
                    onClick={(e) => handleRecruiter(e)}
                  >
                    Recruitere...
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            //VIEJO USUARIO
            <div className="grid grid-cols-2">
              <div>
                <h2 className="text-5xl font-bold pb-4">Welcome!</h2>
                <p className="pb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora, sapiente vero temporibus ullam voluptatibus modi
                  maxime quis minima dicta iure hic, molestiae libero veritatis
                  quos.
                </p>

                <h3 className="text-xl pl-3 font-bold pb-4">
                  {profileState.profile === "BUSINESS" ? (
                    <ButtonsHomeE />
                  ) : (
                    <ButtonsHomeP />
                  )}
                </h3>
              </div>
              <div>
                <img className="max-w-sm" src="/Landing.png" alt="asd" />
              </div>
            </div>
          )
        ) : (
          <div className="grid grid-cols-2">
            <div>
              <h2 className="text-5xl font-bold pb-4">Welcome!</h2>
              <p className="pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, sapiente vero temporibus ullam voluptatibus modi maxime
                quis minima dicta iure hic, molestiae libero veritatis quos.
              </p>

              <div className="grid grid-cols-2">
                <div>
                  <h3 className="text-xl pl-3 font-bold pb-4">
                    Join Us! <ButtonSignIn></ButtonSignIn>
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <img className="max-w-sm" src="/Landing.png" alt="asd" />
            </div>
          </div>
        )}
      </selection>

      <section className="text-center mb-32">
        <div className="max-w-xl inline-block">
          <h1 className="text-4xl font-bold mb-4">How it Works?</h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad
            laudantium veniam incidunt aliquid fugit reprehenderit officiis
            officia eum, velit in veritatis! Alias, enim necessitatibus?
          </p>

          <div className="grid grid-cols-2 tex-center gap-4">
            <div className="pt-8">
              <h2 className="font-bold text-2xl"> Step 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                amet?
              </p>
            </div>
            <div className="pt-8">
              <h2 className="font-bold text-2xl"> Step 2</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                amet?
              </p>
            </div>
            <div className="pt-8">
              <h2 className="font-bold text-2xl"> Step 3</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                amet?
              </p>
            </div>
            <div className="pt-8">
              <h2 className="font-bold text-2xl"> Step 4</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                amet?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="px-16 mb-32">
        <div>
          <h2 className="text-5xl font-bold pb-4">About</h2>
          <p className="pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            sapiente vero temporibus ullam voluptatibus modi maxime quis minima
            dicta iure hic, molestiae libero veritatis quos.
          </p>
        </div>
      </section>
      <section id="contact" className="px-16 mb-32">
        <div>
          <h2 className="text-5xl font-bold pb-4">Contact</h2>
          <p className="pb-4">Feel free to cantact us!</p>
          <Link to="/homep">
            {" "}
            <button className="p-4 py-2 inline-block bg-gradient-to-r from-verdeClaro to-verdeMedio text-white font-bold rounded-3xl filter hover:drop-shadow">
              Contact us!
            </button>{" "}
          </Link>
        </div>
      </section>
      <footer className="text-center py-8 border-t">
        <a className="hover:opacity-100 opacity-70 mr-4" href="a">
          JSeekers
        </a>
        <a className="hover:opacity-100 opacity-70 mr-4" href="a">
          About
        </a>
        <a className="hover:opacity-100 opacity-70 mr-4" href="a">
          Countact
        </a>
        <a className="hover:opacity-100 opacity-70" href="a">
          Por Henry Group PAPA!
        </a>
      </footer>
    </body>
  );
};

export default Landing;

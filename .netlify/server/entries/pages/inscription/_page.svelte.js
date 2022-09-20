import { c as create_ssr_component, d as add_attribute, e as escape } from "../../../chunks/index.js";
import "../../../chunks/config.js";
import "firebase/firestore";
import { getAuth } from "firebase/auth";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email;
  let password;
  let passwordVerification;
  let errorMessage = "";
  getAuth();
  return `<div class="${"flex flex-col w-full h-screen bg-blanc"}"><div class="${"flex flex-col w-full h-32 mt-10"}"><img src="${"/tools/pioche_en_pierre.png"}" alt="${"logo"}" class="${"mx-auto w-auto h-24"}">
		<h1 class="${"mx-auto font-bold text-xl"}">CREUCREUSER</h1></div>

	<div class="${"w-[90%] mx-auto mt-16 shadow-xl"}"><input placeholder="${"Adresse email"}" type="${"email"}" name="${"userEmail"}" id="${"email"}" class="${"w-full h-12 border-2 border-dark pl-1"}"${add_attribute("value", email, 0)}></div>

	<div class="${"w-[90%] mx-auto mt-10 shadow-xl"}"><input placeholder="${"Mot de passe"}" type="${"password"}" name="${"userPassword"}" id="${"password"}" class="${"w-full h-12 border-2 border-dark pl-1"}"${add_attribute("value", password, 0)}></div>

	<div class="${"w-[90%] mx-auto mt-10 shadow-xl"}"><input placeholder="${"V\xE9rification du mot de passe"}" type="${"password"}" name="${"userPasswordVerification"}" id="${"passwordVerification"}" class="${"w-full h-12 border-2 border-dark pl-1"}"${add_attribute("value", passwordVerification, 0)}></div>

	<p class="${"w-full h-6 text-center text-red-500 font-bold mt-12 overflow-auto"}">${escape(errorMessage)}</p>

	<button class="${"mx-auto font-bold mt-10 w-[40%] h-12 bg-taupe rounded-lg shadow-lg border-2 border-dark-taupe"}">S&#39;inscrire
	</button>

	<button class="${"underline mt-3"}">Connexion</button></div>`;
});
export {
  Page as default
};

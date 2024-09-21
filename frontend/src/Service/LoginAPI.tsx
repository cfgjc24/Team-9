import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../Pages/firebase";

export const loginAPI = async (email: string, password: string)=> {

	try {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				user.getIdToken().then((token) => {
					localStorage.setItem("token", token);
				});
				localStorage.setItem("user", JSON.stringify(user.email));

			})
			.catch((error) => {
				console.log(error);
			});
	} catch (error) {
		throw(error);
	}
};

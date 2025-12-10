import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
	signOut,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import {
	getFirestore,
	collection,
	addDoc,
	query,
	where,
	getDocs,
	orderBy,
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyA4w69FS7s6Qk_xC2JwVDxWcUrKBxyjyMQ",
	authDomain: "condrifork.firebaseapp.com",
	projectId: "condrifork",
	storageBucket: "condrifork.firebasestorage.app",
	messagingSenderId: "636628440484",
	appId: "1:636628440484:web:e35fc56d837257fb049d31"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const registrar = async (email, senha) => {
	try {
		await createUserWithEmailAndPassword(
			auth,
			email,
			senha
		);
		alert("Usuário registrado com sucesso!");
	} catch (error) {
		alert("Erro: " + error.message);
	}
};

export const login = async (email, senha) => {
	try {
		await signInWithEmailAndPassword(auth, email, senha);
		alert("Login realizado!");
	} catch (error) {
		alert("Erro: " + error.message);
	}
};

export const logout = async () => {
	await signOut(auth);
};

export const saveScore = async (userId, scoreData) => {
	console.log(userId)
	if (!userId) {
		throw new Error("User ID is required to save a score.");
	}
	console.log('||||||||||||||||||')
	const payload = {
		...scoreData,
		userId,
		createdAt: new Date(),
	}
	console.log(JSON.stringify(payload))
	try {
		await addDoc(collection(db, "jogo3ds_scores"), payload);
	} catch (error) {
		console.error("Erro ao salvar pontuação:", error);

	}
};

// função para buscar pontuações por jogo
export const getScoresByGame = async gameName => {
	try {
		const scoresRef = collection(db, "jogo3ds_scores");
		const q = query(scoresRef, orderBy("points", "desc"));
		const querySnapshot = await getDocs(q);
		const scores = [];
		querySnapshot.forEach(doc => {
			scores.push({
				id: doc.id,
				...doc.data(),
			});
		});
		return scores;
	} catch (error) {
		console.error("Erro ao buscar pontuações:", error);
		throw error;
	}
};
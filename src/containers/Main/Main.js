import React from 'react';

import { MainSectionStyled } from './Main.style';
import SecondTitle from '../../components/Headers/h2_v1/h2_v1';
import DescriptionTitle from '../../components/Headers/h3_v1/h3_v1';

const Main = () => (
	<MainSectionStyled id='sectionMain'>
		<SecondTitle>O mnie</SecondTitle>
		<div>
			<DescriptionTitle>Kim jestem?</DescriptionTitle>

			<p>
				Cześć! Nazywam się Rafał Stróżyk. W 2019 roku wybrałem co tak na prawdę
				chcę robić, zostać front-end developerem, tworzyć niesamowite strony
				które pomogą ludziom w pracy, szkole, w rozrywce. Początkowo zacząłem od
				wszelkich poradników w internecie. Jednak moje chęci do nauki popchnęły
				mnie w stronę kursów. Dlatego zacząłem uczyć się na Udemy, aktualnie
				przerobiłem wiele kursów, co najmniej 150 godzin samych wykładów. Dzięki
				nim uzyskałem niezbędną wiedzę umożliwiającą tworzenie nowoczesnych
				aplikacji internetowych, a także postawić swoje pierwsze kroki w świecie
				IT.
			</p>
		</div>
		<div>
			<DescriptionTitle>Dlaczego programowanie?</DescriptionTitle>
			<p>
				Zainteresowałem się programowaniem po skończeniu technikum, chciałem
				zrozumieć jak działa komputer, i wszystko co z nim związane. Zrozumiałem
				że lubię rozwiązywać problemy które napotkałem podczas nauki, widzieć to
				co można zrobić przy pomocy klawiatury i wiedzy. Dlatego wybrałem tę
				dziedzinę, by móc budować coś dużego co przyda się innym ludziom.
			</p>
		</div>
		<div>
			<DescriptionTitle>Czym się zajmuję aktualnie?</DescriptionTitle>
			<p>
				Aktualnie jestem na drugim roku studiowania informatyki stosowanej,
				szukam także pierwszej pracy jako Junior Front-end Developer. Tworzę
				kolejne projekty, uczę się kolejnych technologii, utrwalam to czego się
				nauczyłem. Przede wszystkim poszerzam wiedzę o Javascript i dobrze się
				bawię spotykając coraz to nowsze wyzwania.
			</p>
		</div>
	</MainSectionStyled>
);

export default Main;

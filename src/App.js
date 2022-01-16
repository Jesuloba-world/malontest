import { Root } from "./components";
import { ReactComponent as Illustration } from "./svg/illustration.svg";

function App() {
	return (
		<Root>
			<Root.MainPane>
				<Root.Logo>Digital</Root.Logo>
				<Root.HeroText>
					Artificial Intelligence Driving Results For The Travel
					Industry
				</Root.HeroText>
				<Root.Form>
					<Root.FormText>
						Welcome back! Please login to your account.
					</Root.FormText>
					<Root.Input type="email" label="Email Address" />
					<Root.Input type="password" label="Password" />
					<Root.FormBottom>
						<Root.Checkbox />
						<Root.Forget>Forgot Password?</Root.Forget>
					</Root.FormBottom>
					<Root.FormButtons>
						<Root.FormButton type="submit">Login</Root.FormButton>
						<Root.FormButton type="button">Sign Up</Root.FormButton>
					</Root.FormButtons>
				</Root.Form>
				<Root.Bottom>
					<Root.Text>Or login with</Root.Text>
					<Root.Link>Facebook</Root.Link>
					<Root.Link>LinkedIn</Root.Link>
					<Root.Link>Google</Root.Link>
				</Root.Bottom>
			</Root.MainPane>
			<Root.ImagePane>
				<Illustration />
			</Root.ImagePane>
		</Root>
	);
}

export default App;

import styled from "styled-components/macro";

export const Container = styled.div`
	display: flex;
`;

export const ImagePane = styled.div`
	background: rgba(229, 229, 229, 0.41);
	width: 100%;
	display: flex;
	align-items: center;
`;

export const MainPane = styled.div`
	padding: 86px 19px 154px 86px;
	min-width: 662px;
`;

export const Logo = styled.h1`
	font-style: normal;
	font-weight: bold;
	font-size: 30px;
	line-height: 35px;
	color: #3751fe;

	margin-bottom: 109px;
`;

export const HeroText = styled.h2`
	font-family: Open Sans;
	font-style: normal;
	font-weight: bold;
	font-size: 36px;
	line-height: 49px;
	color: #3751fe;

	margin-bottom: 28px;
`;

export const Form = styled.form``;

export const Text = styled.p`
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 21px;
	color: rgba(0, 0, 0, 0.6);
`;

export const FormText = styled(Text)`
	margin-bottom: 65px;
`;

export const InputControl = styled.div`
	border: 1px solid #c1bbbb;
	height: 74px;
	padding-inline: 27px;
	padding-block: 12px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	${({ focus }) => (focus ? `border-left: 3px solid #0c31f1;` : null)}
`;

export const Label = styled.label`
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 21px;
	color: rgba(0, 0, 0, 0.6);
`;

export const Input = styled.input`
	border: none;
	font-family: Roboto;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 21px;

	color: #3751fe;

	&:focus {
		outline: none;
	}
`;

export const FormBottom = styled.div`
	display: flex;
	justify-content: space-between;
	padding-left: 27px;
	margin-top: 21px;
	margin-bottom: 72px;
`;

export const CheckControl = styled.div`
	display: flex;
	gap: 11px;
	align-items: center;
`;

export const CheckText = styled.label`
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	color: rgba(0, 0, 0, 0.6);
`;

export const Checkbox = styled.input``;

export const Forget = styled.a`
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 21px;
	color: rgba(0, 0, 0, 0.6);
`;

export const FormButtons = styled.div`
	display: flex;
	gap: 33px;
`;

export const FormButton = styled.button`
	height: 54px;
	width: 129px;
	background: transparent;
	border: none;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 21px;
	cursor: pointer;

	${({ type }) =>
		type === "submit"
			? ` 
          background: #3751FE;
        	box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
          color: #ffffff;
        `
			: `
          background: #FFFFFF;
          border: 1px solid #3751FE;
          color: #0C31F1;
        `}
`;

export const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 81px;
	padding-right: 27px;
`;

export const Link = styled.a`
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	line-height: 21px;
	color: #3751fe;
`;

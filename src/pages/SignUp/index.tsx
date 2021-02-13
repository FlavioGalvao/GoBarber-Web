import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { Form } from '@unform/web';

/**
 * 
 */

import LogoImg from '../../assets/logo.svg'

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {

    function handleSubmit(data:object): void{
        console.log(data);
    }

    return (
        <Container>
        <Background />
        <Content>
            <img src={LogoImg} alt="GoBarber"/>
            <Form onSubmit={handleSubmit}>
                <Input name="nome" icon={FiUser}type="text" placeholder="Nome"/>
                <Input name="email" icon={FiMail} type="text" placeholder="E-mail"/>
                <Input name="senha" icon={FiLock} type="password" placeholder="Senha"/>
                <Button type="submit">Cadastrar</Button>
            </Form>

            <a href="/">
                <FiArrowLeft />
                Voltar para LogIn    
            </a>
        </Content>
    </Container>
    );
}

export default SignUp
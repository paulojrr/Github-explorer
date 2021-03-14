import React from 'react';
import { FiChevronsRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const DashBoard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#">
          <img
            src="https://avatars.githubusercontent.com/u/50791278?s=460&u=c4b7992193215dc3b6c703a7da39690a2fc5a488&v=4"
            alt="Paulo"
          />
          <div>
            <strong>paulojrr/API-NodeJS</strong>
            <p>Api Nodejs</p>
          </div>

          <FiChevronsRight size={20} />
        </a>

        <a href="#">
          <img
            src="https://avatars.githubusercontent.com/u/50791278?s=460&u=c4b7992193215dc3b6c703a7da39690a2fc5a488&v=4"
            alt="Paulo"
          />
          <div>
            <strong>paulojrr/API-NodeJS</strong>
            <p>Api Nodejs</p>
          </div>

          <FiChevronsRight size={20} />
        </a>

        <a href="#">
          <img
            src="https://avatars.githubusercontent.com/u/50791278?s=460&u=c4b7992193215dc3b6c703a7da39690a2fc5a488&v=4"
            alt="Paulo"
          />
          <div>
            <strong>paulojrr/API-NodeJS</strong>
            <p>Api Nodejs</p>
          </div>

          <FiChevronsRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default DashBoard;

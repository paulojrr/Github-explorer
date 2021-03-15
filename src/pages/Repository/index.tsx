import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronsLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/50791278?s=460&u=c4b7992193215dc3b6c703a7da39690a2fc5a488&v=4"
            alt="xxx"
          />
          <div>
            <strong>rocket/unform</strong>
            <p>xxxxxxx</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1800</strong>
            <span>starts</span>
          </li>
          <li>
            <strong>1800</strong>
            <span>starts</span>
          </li>
          <li>
            <strong>1800</strong>
            <span>starts</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="dasda">
          <div>
            <strong>ddsadsad</strong>
            <p>dsddsd</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;

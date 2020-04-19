import React, { useState, useEffect } from 'react';
import { Switch, BrowserRouter as Route, useHistory } from 'react-router-dom';
import User from '../../organisms/User';
import List from '../../organisms/List';
import api from '../../../services/api';
import Error404 from '../../pages/Error404';
import Logo from '../../atoms/Logo';
import Search from '../../molecules/Search';

import {
  Content,
  SectionLeft,
  SectionRight,
  Header,
  Container,
} from './styles';

const Result = ({ match }) => {
  const { user } = match.params;
  const [value, setValue] = useState(user);
  const [userData, setUserData] = useState({});
  const [reposData, setReposData] = useState([]);
  const [loader, setLoader] = useState(true);
  const location = useHistory();

  const getUser = async name => {
    try {
      return await api.get(`/users/${name}`);
    } catch (error) {
      location.push(`/error`);
    }
  };

  const getRepos = async name => {
    try {
      return await api.get(`/users/${name}/repos`);
    } catch (error) {
      location.push(`/error`);
    }
  };

  const countStars = repos => {
    return repos.data.reduce((total, { stargazers_count }) => {
      return total + stargazers_count;
    }, 0);
  };

  const mountInfor = async name => {
    try {
      const userInfor = await getUser(name);
      const reposInfor = await getRepos(name);
      setReposData(reposInfor.data);
      setUserData({
        ...userInfor.data,
        stars: countStars(reposInfor),
        repositories: reposInfor.data.length,
      });
      setLoader(false);
    } catch (error) {
      location.push(`/error`);
    }
  };

  useEffect(() => {
    setLoader(true);
    value && mountInfor(value);
  }, [value]);

  useEffect(() => {
    if (!loader) {
      location.push(`/user/${value}/repos`);
    } else {
      location.push(`/user/${value}`);
    }
  }, [loader]);

  return (
    <Container>
      <Header>
        <Logo size="normal" />
        <div className="header__search">
          <Search onSearch={setValue} />
        </div>
      </Header>
      <Content>
        <Switch>
          <Route path="/user/:user" exact>
            Loading...
          </Route>
          <Route path="/user/:user/repos">
            <SectionLeft>
              <User data={userData} />
            </SectionLeft>
            <SectionRight>
              <List data={reposData} />
            </SectionRight>
          </Route>
          <Route path="/error" exact>
            <Error404 />
          </Route>
        </Switch>
      </Content>
    </Container>
  );
};

export default Result;

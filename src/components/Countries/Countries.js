import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getCountries } from '../../redux/countries/countries';
import Country from '../Country/Country';
import map from '../../assets/countries.png';
import './countries.css';

const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  useEffect(() => {
    dispatch(getCountries());
  }, []);
  return (
    <>
      <Container className="map">
        <Row>
          <Col xs={6}>
            <img src={map} alt="africa map" className="africa-image" />
          </Col>
          <Col xs={6} className="righ-map-column" style={{ color: 'white' }}>
            <h3>AFRICA POPULATION</h3>
          </Col>
        </Row>
      </Container>
      <Container className="grid-container">
        {Object.keys(countries).map((countryId) => {
          const {
            currencies, flags, name, population,
          } = countries[countryId];
          return (
            <Country
              key={name}
              currencies={currencies}
              flags={flags}
              name={name}
              population={population}
            />
          );
        })}
      </Container>
    </>
  );
};

export default Countries;

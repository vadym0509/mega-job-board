import React from 'react'
import { HeaderContainer, ImageWrapper, NavItem, StyledSelect, SelectWrapper, StyledLogo } from './homeHeader.styles'
// import Logo from '../../assets/logo.png'
import useIsMobile from '../../../hooks/hooks'
import { IconButton } from '../../TitleBar/titleBar.styles'

export const HomeHeader = (props) => {
  const {title, text, buttonTitle, setLocation, location} = props
  const isMobile = useIsMobile()

  return (
    <div>
    <HeaderContainer>
        <ImageWrapper>
            <StyledLogo
                src="/images/logo.png"
                alt="logo"
            />
            <NavItem>
                <span>About Us</span>
            </NavItem>
            <NavItem>
                <span>View Jobs</span>
            </NavItem>
            <NavItem>
                <span>Blog</span>
            </NavItem>
        </ImageWrapper>
        <SelectWrapper>
            <StyledSelect onChange={(e) => setLocation(e.target.value)} value={location}>
                <option value="US">US</option>
                <option value="UK">UK</option>
                <option value="CA">CA</option>
                <option value="ZA">ZA</option>
            </StyledSelect>
        </SelectWrapper>
        {isMobile ? <IconButton style={{marginRight: '0px'}}>
            <img
                src="/images/icons/icon-menu.svg"
                width={19}
                height={16}
            />
        </IconButton> : null}
    </HeaderContainer>
    </div>
  )
}

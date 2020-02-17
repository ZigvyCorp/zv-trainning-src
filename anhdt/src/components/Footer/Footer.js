import React from 'react'

import * as FooterStyle from './Footer.style'
import Logo from '../Logo'

const CustomFooter = () => (
  <FooterStyle.Wrapper>

    <FooterStyle.CustomFooter>
      
      <FooterStyle.ChildWrapper justifyContent="space-between">

        <FooterStyle.ChildWrapper justifyContent="space-between">
          <Logo />

          <FooterStyle.ChildWrapper justifyContent="space-between">
            
            <FooterStyle.CustomCategory>Download App</FooterStyle.CustomCategory>
            <FooterStyle.CustomCategory>F.A.Q</FooterStyle.CustomCategory>
            <FooterStyle.CustomCategory>Support</FooterStyle.CustomCategory>
            <FooterStyle.CustomCategory>Feedback</FooterStyle.CustomCategory>

          </FooterStyle.ChildWrapper>

        </FooterStyle.ChildWrapper>

        <FooterStyle.ChildWrapper justifyContent="space-between">
          
          <FooterStyle.CustomIconWrapper type="facebook" />
          <FooterStyle.CustomIconWrapper type="twitter" />
          <FooterStyle.CustomIconWrapper type="instagram" />

        </FooterStyle.ChildWrapper>

      </FooterStyle.ChildWrapper>

      <FooterStyle.ChildWrapper justifyContent="flex-start">
        <FooterStyle.CustomIconCopyRight type="copyright"/>
        <span>2017 Zigvy Inc.</span>
      </FooterStyle.ChildWrapper> 

    </FooterStyle.CustomFooter>

  </FooterStyle.Wrapper>
)

export default CustomFooter



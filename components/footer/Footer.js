import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <div className="footer">
      <div className="wrap">
        <div>
          <img src="/images/footer/logo_w.png" alt="logo" />
        </div>
        <div className="textGroup">
          <p>이용약관 | 개인정보처리방침 | 이메일무단수집거부</p>
          <br />
          <p>
            대표 : 이미래 사업자등록번호 : 468-87-01486 Tel : 02-0000-0000 Fax :
            000-0000-0000
          </p>
          <p>주소 : 서울특별시 강서구 강서로33가길 78(화곡동, 씨마스 빌딩) </p>
          <br />
          <p>Copyright ⓒ CCDP. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

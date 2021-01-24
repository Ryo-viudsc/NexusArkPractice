import React from 'react';
import './privacy-policy.styles.scss';
import TitleHeader from '../../components/title-header/title-header.component';

const PrivacyPolicy = () => { 


  return (
      <>
      <TitleHeader />
      <div className='privacy-policy'>  
          <p className='sub-title' >特定商取引法に基づく表記</p>
          <p>事業者の名称</p>
          <p>中村葵</p>
          <p></p>
          <p>事業者の所在地</p>
          <p>郵便番号 ：1230841</p>
          <p></p>
          <p>住所 ：東京都足立区西新井4-27-33</p>
          <p></p>
          <p>事業者の連絡先</p>
          <p>電話番号 ： </p>
          <p></p>
          <p>営業時間：9:00〜22:00　定休日：土日祝</p>
          <p></p>
          <p>販売価格について</p>
          <p>販売価格は、表示された金額（表示価格/消費税込）と致します。</p>
          <p></p>
          <p>代金（対価）の支払方法と時期</p>
          <p>支払方法：クレジットカードによる決済がご利用頂けます。支払時期：商品注文確定時でお支払いが確定致します。</p>
          <p></p>
          <p>役務または商品の引渡時期</p>
          <p>配送のご依頼を受けてから7日〜14日以内に発送いたします。</p>
          <p></p>
          <p>返品についての特約に関する事項</p>
          <p>商品に欠陥がある場合を除き、基本的には返品には応じません</p>
      </div>
      </>
  )
};


export default PrivacyPolicy;
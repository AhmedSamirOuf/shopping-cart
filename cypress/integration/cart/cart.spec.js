describe('cart', () => {
  it('should add items to cart', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Orange shirt clothes - $10 x 3');
    cy.contains('Your cart');
    cy.contains('you haven\'t added items yet.');
    cy.get('#tshirt-1').should('be.not.disabled');
    cy.get('#tshirt-1').click();
    cy.contains('Orange shirt clothes - $10 x 2');
    cy.contains('blue shirt clothes - $20 x 7');
    cy.contains('black shirt clothes - $30 x 9');
    cy.contains('white shirt clothes - $40 x 1');
    cy.get('#tshirt-1').click();
    cy.get('#tshirt-2').click();
    cy.contains('Orange shirt clothes - $10 x 1');
    cy.contains('blue shirt clothes - $20 x 6');
    cy.get('#tshirt-1').click();
    cy.contains('Sold Out');
    cy.get('#tshirt-1').should('be.disabled');
    cy.get('#tshirt-2').should('be.not.disabled');

    cy.contains('Orange shirt');
    cy.contains('Price: 10$');
    cy.contains('Quantity: 3');

    cy.contains('blue shirt');
    cy.contains('Price: 20$');
    cy.contains('Quantity: 1');

    cy.contains('total cost :50$');

    cy.get('#sub-quantity').click();
    cy.contains('Quantity: 2');
    cy.contains('total cost :40$');


    cy.get('#remove-item').click();
    cy.get('Orange shirt').should('not.exist');
    cy.contains('total cost :30$');

    cy.get('#place-order').click();
    const response = fetch("https://cloud.mongodb.com/explorer/v1/groups/5f772c2bad885503ac97533a/requests/5f777447b299ca0efbf7a7a2/types/find/await", {
      "headers": {
        "accept": "*/*",
        "accept-language": "en-GB,en;q=0.9",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        "cookie": "optimizelyEndUserId=oeu1601645418282r0.1374619883703927; __session.timestamps=%7B%22external_referrer%22%3A1601645419295%2C%22referrer%22%3A1601645419295%7D; _gcl_au=1.1.1352402465.1601645420; ajs_anonymous_id=%221c0d1143-0735-45ef-95ad-65bed9127f37%22; _hjTLDTest=1; _hjid=ba1f3f94-2328-4139-9fb7-6a127cc342ef; _ga=GA1.2.419135100.1601645424; _gid=GA1.2.718993729.1601645424; intercom-id-qq7v0gqb=91d5b80d-27b8-4696-9764-1785feb405ef; _fbp=fb.1.1601645424510.1692988860; amplitude_idundefinedmongodb.com=eyJvcHRPdXQiOmZhbHNlLCJzZXNzaW9uSWQiOm51bGwsImxhc3RFdmVudFRpbWUiOm51bGwsImV2ZW50SWQiOjAsImlkZW50aWZ5SWQiOjAsInNlcXVlbmNlTnVtYmVyIjowfQ==; mkjs_group_id=null; _biz_uid=5cd01880a99c43f7e0ae7b4f06585bc6; _biz_flagsA=%7B%22Version%22%3A1%2C%22XDomain%22%3A%221%22%2C%22ViewThrough%22%3A%221%22%2C%22Frm%22%3A%221%22%7D; cloud-user=1; __stripe_mid=6687a35f-a48b-431d-a48a-50c43a9bed14505870; ajs_user_id=%225c6823bca6f2394958cf5a4c%22; mkjs_user_id=%225c6823bca6f2394958cf5a4c%22; __stripe_sid=16b75648-f24d-4621-9fb3-4be0807a125b64401b; segmentSessionId=1601663327219; __session.data=%7B%22optimizelyEndUserId%22%3A%22oeu1601645418282r0.1374619883703927%22%2C%22external_referrer%22%3A%22https%3A%2F%2Fzellwk.com%2F%22%2C%22referrer%22%3A%22https%3A%2F%2Fzellwk.com%2F%22%2C%22loggedIn%22%3Atrue%7D; amplitude_id_5c21ec42382da5545717955a7051ff58mongodb.com=eyJkZXZpY2VJZCI6IjFjMGQxMTQzLTA3MzUtNDVlZi05NWFkLTY1YmVkOTEyN2YzNyIsInVzZXJJZCI6IjVjNjgyM2JjYTZmMjM5NDk1OGNmNWE0YyIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYwMTY2MzUyMDE0MywibGFzdEV2ZW50VGltZSI6MTYwMTY2MzUyMTg5NCwiZXZlbnRJZCI6NSwiaWRlbnRpZnlJZCI6MTQsInNlcXVlbmNlTnVtYmVyIjoxOX0=; _biz_sid=5f8cbf; okta-oauth-state=%7B%22stateNonce%22%3A%22704555ff-80a8-40f9-909d-973c7340deba%22%7D; okta-oauth-nonce=384a051b-4b2d-4117-8d98-6410a692adb9; mmsa-prod=ab31a33e35b6cac5164c3c3b1dd54f7e-20201002; _biz_nA=18; _biz_pendingA=%5B%22m%2Fipv%3F_biz_r%3D%26_biz_h%3D802060723%26_biz_u%3D5cd01880a99c43f7e0ae7b4f06585bc6%26_biz_s%3D5f8cbf%26_biz_l%3Dhttps%253A%252F%252Faccount.mongodb.com%252Faccount%252Foauth%253Fusername%253Dahmed.ouf96%252540gmail.com%2526csrfTime%253D1601663542005%2526uId%253D5c6823bca6f2394958cf5a4c%2526needsMfa%253Dfalse%2526email%253Dahmed.ouf96%252540gmail.com%2526csrfToken%253D672a6fb2df247d1d0dabda3c3482b4af9b9faba5a46f5e8cd20b01d3c4e50954-be1f941c7146806b463ee6fb87f3c956949e28a153c65c9ca7b111232264808306d08aae109ae0e6704f5187e9f3235456b740eb699526d69d9c39b80e66eff0%26_biz_t%3D1601663543153%26_biz_i%3D%250A%2520%2520%2520%2520Cloud%253A%2520MongoDB%2520Cloud%26_biz_n%3D17%26rnd%3D791539%22%5D; intercom-session-qq7v0gqb=a1hNVUdtWUJqZGZjWENJSThveXU3NGxPTyszRG5ocjZBMVZQaVZ5d1RUQ2Nzby95cTlSbnloNFJ5YUdJQVV6OS0tNWx1N3dJSnp4RXNDS0E0enIvUEpSdz09--9b311219b51d2d4fbe8e060a8f8b57e35e504c25; _gat=1"
      },
      "referrer": "https://cloud.mongodb.com/v2/5f772c2bad885503ac97533a",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": null,
      "method": "GET",
      "mode": "cors"
    });
    console.log(response);
    expect(true).equals(true)
  })
});


export default function handler(req, res) {
    res.redirect("https://webfinger.io/.well-known/webfinger")

    /*

    res.send(`{
    "subject":"acct:RobEarlam@mastodon.social",
    "aliases":
    [
        "https://social.ridetrans.it/@qwacksire",
        "https://mastodon.social/users/qwacksire"
    ],
    "links":
    [
        {
            "rel":"http://webfinger.net/rel/profile-page",
            "type":"text/html",
            "href":"https://social.ridetrans.it/@qwacksire"
        },
        {
            "rel":"self",
            "type":"application/activity+json",
            "href":"https://social.ridetrans.it/users/qwacksire"
        },
        {
            "rel":"http://ostatus.org/schema/1.0/subscribe",
            "template":"https://social.ridetrans.it/authorize_interaction?uri={uri}"
        }
    ]
}`);

     */
}

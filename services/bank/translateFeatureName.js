export default function translateFeatureName(featureName) {
    if (this.isUK) {
        // in UK we use "Current" and not "Checking" accounts
        switch (featureName) {
            case 'Checking & Savings Accounts':
                return 'Current & Savings Accounts'
            case 'Free Checking Account Available':
                return 'Free Current Account Available'
        }
    }
    return featureName
}
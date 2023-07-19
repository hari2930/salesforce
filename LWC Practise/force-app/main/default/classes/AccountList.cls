public with sharing class AccountList {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccList(){
       return[SELECT id,name,rating, industry FROM Account ORDER BY createdDate];
    }
 
}
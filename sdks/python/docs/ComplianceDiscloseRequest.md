# ComplianceDiscloseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**viewing_key** | [**ViewingKey**](ViewingKey.md) |  | 
**transaction_data** | [**ComplianceDiscloseRequestTransactionData**](ComplianceDiscloseRequestTransactionData.md) |  | 
**scope** | [**ComplianceDiscloseRequestScope**](ComplianceDiscloseRequestScope.md) |  | 
**auditor_id** | **str** |  | 
**auditor_verification** | [**ComplianceDiscloseRequestAuditorVerification**](ComplianceDiscloseRequestAuditorVerification.md) |  | 

## Example

```python
from sipher_client.models.compliance_disclose_request import ComplianceDiscloseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceDiscloseRequest from a JSON string
compliance_disclose_request_instance = ComplianceDiscloseRequest.from_json(json)
# print the JSON string representation of the object
print(ComplianceDiscloseRequest.to_json())

# convert the object into a dict
compliance_disclose_request_dict = compliance_disclose_request_instance.to_dict()
# create an instance of ComplianceDiscloseRequest from a dict
compliance_disclose_request_from_dict = ComplianceDiscloseRequest.from_dict(compliance_disclose_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ComplianceDiscloseRequestAuditorVerification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auditor_key_hash** | **str** |  | 
**nonce** | **str** |  | 

## Example

```python
from sipher_client.models.compliance_disclose_request_auditor_verification import ComplianceDiscloseRequestAuditorVerification

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceDiscloseRequestAuditorVerification from a JSON string
compliance_disclose_request_auditor_verification_instance = ComplianceDiscloseRequestAuditorVerification.from_json(json)
# print the JSON string representation of the object
print(ComplianceDiscloseRequestAuditorVerification.to_json())

# convert the object into a dict
compliance_disclose_request_auditor_verification_dict = compliance_disclose_request_auditor_verification_instance.to_dict()
# create an instance of ComplianceDiscloseRequestAuditorVerification from a dict
compliance_disclose_request_auditor_verification_from_dict = ComplianceDiscloseRequestAuditorVerification.from_dict(compliance_disclose_request_auditor_verification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



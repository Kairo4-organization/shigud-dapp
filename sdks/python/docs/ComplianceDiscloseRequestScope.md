# ComplianceDiscloseRequestScope


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**start_time** | **int** |  | [optional] 
**end_time** | **int** |  | [optional] 
**counterparty** | **str** |  | [optional] 
**min_amount** | **str** |  | [optional] 

## Example

```python
from sipher_client.models.compliance_disclose_request_scope import ComplianceDiscloseRequestScope

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceDiscloseRequestScope from a JSON string
compliance_disclose_request_scope_instance = ComplianceDiscloseRequestScope.from_json(json)
# print the JSON string representation of the object
print(ComplianceDiscloseRequestScope.to_json())

# convert the object into a dict
compliance_disclose_request_scope_dict = compliance_disclose_request_scope_instance.to_dict()
# create an instance of ComplianceDiscloseRequestScope from a dict
compliance_disclose_request_scope_from_dict = ComplianceDiscloseRequestScope.from_dict(compliance_disclose_request_scope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


